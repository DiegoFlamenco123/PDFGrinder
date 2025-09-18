import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

type Props = {
  id: string;
  file: File;
  url: string;
  onRemove: () => void;
};

export default function SortableItem({ id, file, url, onRemove }: Props) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    cursor: isDragging ? "grabbing" : "grab",
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={`relative w-36 h-48 border-0 rounded-2xl shadow-lg bg-white overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105 group ${
        isDragging ? 'shadow-2xl scale-105 rotate-2 z-50' : ''
      }`}
    >

      <div className="w-full h-32 bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
        <iframe
          src={url}
          width="100%"
          height="100%"
          className="rounded-t-2xl pointer-events-none"
          title={file.name}
        />
    
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

   
      <button
        onClick={onRemove}
        onPointerDown={(e) => e.stopPropagation()}
        className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs hover:bg-red-600 hover:scale-110 transition-all duration-200 pointer-events-auto shadow-lg opacity-0 group-hover:opacity-100"
        title="Eliminar archivo"
      >
        ✕
      </button>

      <div className="p-3 bg-white">
        <p className="text-xs text-gray-600 truncate font-medium leading-tight">
          {file.name}
        </p>
        <p className="text-xs text-gray-400 mt-1">
          {(file.size / 1024 / 1024).toFixed(2)} MB
        </p>
      </div>

      <div className="absolute bottom-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="flex space-x-1">
          <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
          <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
          <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
        </div>
      </div>

      {isDragging && (
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-2xl pointer-events-none"></div>
      )}
    </div>
  );
}
