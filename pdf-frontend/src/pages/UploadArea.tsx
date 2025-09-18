import { useState } from "react";
import axios from "axios";
import DropZone from "../components/DropZone";
import FileList from "../components/FileList";
import UploadControls from "../components/UploadControls";
import Feedback from "../components/Feedback";
import type { FileWithPreview } from "../types/FileWithPreview";
import type { DragEndEvent } from "@dnd-kit/core";

export default function UploadArea() {
  const [files, setFiles] = useState<FileWithPreview[]>([]);
  const [mergedUrl, setMergedUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const API_URL = import.meta.env.VITE_API_URL;

  const convertFiles = async (fileList: File[]): Promise<FileWithPreview[]> =>
    Promise.all(
      fileList.map(async (file) => {
        const blob = new Blob([await file.arrayBuffer()], { type: "application/pdf" });
        const url = URL.createObjectURL(blob);
        return {
          id: `${file.name}-${file.lastModified}-${Math.random().toString(36).slice(2)}`,
          file,
          url,
        };
      })
    );

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const newFiles = await convertFiles(Array.from(e.target.files));
    setFiles((prev) => [...prev, ...newFiles]);
  };

  const handleDrop = async (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const dropped = Array.from(e.dataTransfer.files).filter((f) => f.type === "application/pdf");
    if (dropped.length === 0) {
      setError("Solo se permiten archivos PDF.");
      return;
    }
    const newFiles = await convertFiles(dropped);
    setFiles((prev) => [...prev, ...newFiles]);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => e.preventDefault();

  const handleRemoveFile = (idToRemove: string) => {
    setFiles((prev) => {
      const toRemove = prev.find((f) => f.id === idToRemove);
      if (toRemove) URL.revokeObjectURL(toRemove.url);
      return prev.filter((f) => f.id !== idToRemove);
    });
  };

  const handleMerge = async () => {
    if (files.length < 2) {
      setError("Seleccioná al menos 2 archivos PDF.");
      return;
    }

    setLoading(true);
    setError(null);
    setMergedUrl(null);

    const formData = new FormData();
    files.forEach(({ file }) => formData.append("files", file));

    try {
      const res = await axios.post(`${API_URL}/merge`, formData, {
        responseType: "blob",
      });
      const blobUrl = URL.createObjectURL(new Blob([res.data], { type: "application/pdf" }));
      setMergedUrl(blobUrl);
    } catch {
      setError("Hubo un error al unir los PDFs.");
    } finally {
      setLoading(false);
    }
  };

  const onDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      setFiles((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);
        const newArr = [...items];
        const [moved] = newArr.splice(oldIndex, 1);
        newArr.splice(newIndex, 0, moved);
        return newArr;
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100/50 relative overflow-hidden">
 

      <div className="relative z-10 w-full flex flex-col items-center justify-start px-6 py-12">
        <div className="w-full max-w-6xl">
          
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text ">
              Combina tus PDFs
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Sube múltiples archivos PDF y combínalos en uno solo. Arrastra y suelta para reorganizar el orden.
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 p-8">
            <DropZone
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              hasFiles={files.length > 0}
            />

            {files.length > 0 && (
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  Archivos seleccionados ({files.length})
                </h3>
                <FileList files={files} onRemove={handleRemoveFile} onDragEnd={onDragEnd} />
              </div>
            )}

            <div className="mt-8">
              <UploadControls onFileChange={handleFileChange} onMerge={handleMerge} loading={loading} />
            </div>

          
            {loading && (
              <div className="flex flex-col items-center justify-center mt-8 py-12">
                <div className="relative">
                  <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
                  <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-t-purple-600 rounded-full animate-spin animation-delay-1000"></div>
                </div>
                <p className="text-lg text-gray-600 mt-4 font-medium">Procesando PDFs...</p>
                <div className="flex gap-2 mt-4">
                  <span className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"></span>
                  <span className="w-3 h-3 bg-purple-500 rounded-full animate-bounce animation-delay-200"></span>
                  <span className="w-3 h-3 bg-indigo-500 rounded-full animate-bounce animation-delay-400"></span>
                </div>
              </div>
            )}

            <div className="mt-8">
              <Feedback error={error} mergedUrl={mergedUrl} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
