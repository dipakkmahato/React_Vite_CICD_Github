import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoSrc: string;
  title?: string;
}

export const VideoModal = ({ isOpen, onClose, videoSrc, title = "Video Resume" }: VideoModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-4xl mx-4">
        <div className="bg-slate-800 rounded-lg overflow-hidden border border-slate-700">
          <div className="flex items-center justify-between p-4 border-b border-slate-700">
            <h3 className="text-lg font-semibold text-white">{title}</h3>
            <Button
              onClick={onClose}
              variant="ghost"
              size="icon"
              className="text-gray-400 hover:text-white"
            >
              <X size={20} />
            </Button>
          </div>
          <div className="p-4">
            <video
              src={videoSrc}
              controls
              className="w-full h-auto max-h-96 rounded-md"
              preload="metadata"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};