import React, { useEffect, useRef } from 'react';
import QRCode from 'qrcode';

interface QRGeneratorProps {
  url: string;
  size?: number;
}

const QRGenerator: React.FC<QRGeneratorProps> = ({ url, size = 200 }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current) {
      QRCode.toCanvas(canvasRef.current, url, {
        width: size,
        margin: 2,
        color: {
          dark: '#000000',
          light: '#FFFFFF'
        }
      });
    }
  }, [url, size]);

  return (
    <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-lg">
      <h3 className="text-lg font-semibold text-gray-800 mb-3">모바일에서 접속하기</h3>
      <canvas ref={canvasRef} className="border border-gray-200 rounded" />
      <p className="text-sm text-gray-600 mt-3 text-center">
        QR 코드를 스캔하여<br/>모바일에서 KB 대시보드를 확인하세요
      </p>
      <p className="text-xs text-gray-500 mt-2 break-all text-center">
        {url}
      </p>
    </div>
  );
};

export default QRGenerator;