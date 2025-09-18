type Props = {
  onFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onMerge: () => void;
  loading: boolean;
};

export default function UploadControls({ onFileChange, onMerge, loading }: Props) {
  return (
    <div className="flex items-center gap-6 flex-wrap bg-gradient-to-r from-gray-50 to-blue-50 p-6 rounded-2xl border border-gray-200">
      {/* File input with custom styling */}
      <div className="relative">
        <input
          type="file"
          accept="application/pdf"
          multiple
          onChange={onFileChange}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          id="file-input"
        />
        <label
          htmlFor="file-input"
          className="flex items-center gap-3 px-6 py-3 bg-white border-2 border-dashed border-blue-300 rounded-xl cursor-pointer hover:border-blue-400 hover:bg-blue-50 transition-all duration-300 group shadow-sm hover:shadow-md"
        >
          <div className="w-5 h-5 text-blue-500 group-hover:scale-110 transition-transform duration-300">
            <svg fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </div>
          <span className="text-blue-600 font-medium group-hover:text-blue-700 transition-colors duration-300">
            Seleccionar PDFs
          </span>
        </label>
      </div>

      {/* Merge button */}
      <button
        onClick={onMerge}
        disabled={loading}
        className={`relative px-8 py-3 rounded-xl font-semibold text-white transition-all duration-300 transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none ${
          loading 
            ? 'bg-gradient-to-r from-gray-400 to-gray-500' 
            : 'bg-gradient-to-r from-[#EF233C] to-[#D90429] shadow-lg hover:shadow-xl'
        }`}
      >
        {loading ? (
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            <span>Unificando...</span>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" clipRule="evenodd" />
            </svg>
            <span>Unir PDFs</span>
          </div>
        )}
      </button>

      {/* Info text */}
      <div className="text-sm text-gray-600 ml-auto">
        <p className="flex items-center gap-2">
          <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
          Selecciona al menos 2 archivos para combinar
        </p>
      </div>
    </div>
  );
}
