import React, { useEffect, useState } from 'react';
import { Mic, X } from 'lucide-react';

interface VoiceSearchProps {
  onResult: (text: string) => void;
  onClose: () => void;
}

export default function VoiceSearch({ onResult, onClose }: VoiceSearchProps) {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');

  useEffect(() => {
    let recognition: any = null;

    if ('webkitSpeechRecognition' in window) {
      recognition = new (window as any).webkitSpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = true;
      recognition.lang = 'fr-FR';

      recognition.onstart = () => {
        setIsListening(true);
      };

      recognition.onresult = (event: any) => {
        const transcript = Array.from(event.results)
          .map((result: any) => result[0])
          .map((result: any) => result.transcript)
          .join('');

        setTranscript(transcript);
      };

      recognition.onend = () => {
        setIsListening(false);
        if (transcript) {
          onResult(transcript);
        }
      };

      recognition.start();
    }

    return () => {
      if (recognition) {
        recognition.stop();
      }
    };
  }, [onResult]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full mx-4">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold">Recherche vocale</h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="text-center">
          <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${
            isListening ? 'bg-blue-100 animate-pulse' : 'bg-gray-100'
          }`}>
            <Mic className={`h-8 w-8 ${isListening ? 'text-blue-600' : 'text-gray-600'}`} />
          </div>

          <p className="mt-4 text-gray-600">
            {isListening
              ? 'Je vous écoute...'
              : 'Cliquez sur le microphone pour commencer'}
          </p>

          {transcript && (
            <p className="mt-4 text-sm text-gray-900 bg-gray-50 p-4 rounded-lg">
              {transcript}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}