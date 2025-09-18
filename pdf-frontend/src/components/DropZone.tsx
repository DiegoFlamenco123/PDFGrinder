interface DropZoneProps {
  onDrop: (e: React.DragEvent<HTMLDivElement>) => void;
  onDragOver: (e: React.DragEvent<HTMLDivElement>) => void;
  hasFiles: boolean;
}

export default function DropZone({ onDrop, onDragOver, hasFiles }: DropZoneProps) {
  return (
    <div
      onDrop={onDrop}
      onDragOver={onDragOver}
      className={`w-full h-64 border-2 border-dashed rounded-lg flex items-center justify-center text-center cursor-pointer transition
        ${hasFiles ? "bg-gray-50" : "border-blue-400 bg-blue-50 hover:bg-blue-100 text-blue-600"}`}
    >
      {hasFiles 
        ? "Arrastra más PDFs aquí para añadirlos" 
        : "Arrastra y suelta tus archivos PDF o selecciona manualmente"}
    </div>
  );
}