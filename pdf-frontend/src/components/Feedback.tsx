import { Alert } from "@mui/material";

type Props = {
  error: string | null;
  mergedUrl: string | null;
};

export default function Feedback({ error, mergedUrl }: Props) {
  return (
    <>
      {error && (
        <div className="animate-fadeIn">
          <Alert 
            severity="error" 
            className="rounded-xl shadow-lg border-l-4 border-l-red-500"
            sx={{
              '& .MuiAlert-icon': {
                fontSize: '1.5rem'
              },
              '& .MuiAlert-message': {
                fontSize: '1rem',
                fontWeight: '500'
              }
            }}
          >
            {error}
          </Alert>
        </div>
      )}
      
      {mergedUrl && (
        <div className="mt-6 space-y-4 animate-fadeIn">
          <Alert 
            severity="success" 
            className="rounded-xl shadow-lg border-l-4 border-l-green-500"
            sx={{
              '& .MuiAlert-icon': {
                fontSize: '1.5rem'
              },
              '& .MuiAlert-message': {
                fontSize: '1rem',
                fontWeight: '500'
              }
            }}
          >
            ✅ ¡PDF combinado creado con éxito!
          </Alert>
          
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-2xl border border-green-200 shadow-lg">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-green-800 mb-1">
                  Archivo listo para descargar
                </h3>
                <p className="text-green-600 text-sm">
                  Tu PDF combinado ha sido procesado correctamente
                </p>
              </div>
              <a
                href={mergedUrl}
                download="merged.pdf"
                className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                Descargar PDF
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
