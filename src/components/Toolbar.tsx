import React from 'react';
import { SaveIcon, UploadIcon, UndoIcon, RedoIcon, ZoomInIcon, ZoomOutIcon, TrashIcon } from 'lucide-react';

interface ToolbarProps {
  onSave: () => void;
  onLoad: () => void;
  onReset: () => void;
  onUndo: () => void;
  onRedo: () => void;
  onZoomIn: () => void;
  onZoomOut: () => void;
  canUndo: boolean;
  canRedo: boolean;
}

export const Toolbar: React.FC<ToolbarProps> = ({
  onSave,
  onLoad,
  onReset,
  onUndo,
  onRedo,
  onZoomIn,
  onZoomOut,
  canUndo,
  canRedo,
}) => {
  return (
    <div className="h-14 bg-gray-800 border-b border-gray-700 flex items-center px-4 gap-2">
      <button
        onClick={onSave}
        className="p-2 hover:bg-gray-700/50 rounded-lg transition-colors"
        title="Save Layout"
      >
        <SaveIcon className="w-5 h-5" />
      </button>
      <button
        onClick={onLoad}
        className="p-2 hover:bg-gray-700/50 rounded-lg transition-colors"
        title="Load Layout"
      >
        <UploadIcon className="w-5 h-5" />
      </button>
      <div className="w-px h-6 bg-gray-200 mx-2" />
      <button
        onClick={onUndo}
        disabled={!canUndo}
        className="p-2 hover:bg-gray-700/50 rounded-lg transition-colors disabled:opacity-50"
        title="Undo"
      >
        <UndoIcon className="w-5 h-5" />
      </button>
      <button
        onClick={onRedo}
        disabled={!canRedo}
        className="p-2 hover:bg-gray-700/50 rounded-lg transition-colors disabled:opacity-50"
        title="Redo"
      >
        <RedoIcon className="w-5 h-5" />
      </button>
      <div className="w-px h-6 bg-gray-200 mx-2" />
      <button
        onClick={onZoomIn}
        className="p-2 hover:bg-gray-700/50 rounded-lg transition-colors"
        title="Zoom In"
      >
        <ZoomInIcon className="w-5 h-5" />
      </button>
      <button
        onClick={onZoomOut}
        className="p-2 hover:bg-gray-700/50 rounded-lg transition-colors"
        title="Zoom Out"
      >
        <ZoomOutIcon className="w-5 h-5" />
      </button>
      <div className="w-px h-6 bg-gray-200 mx-2" />
      <button
        onClick={onReset}
        className="p-2 hover:bg-gray-700/50 rounded-lg transition-colors"
        title="Reset Layout"
      >
        <TrashIcon className="w-5 h-5 text-red-500" />
      </button>
    </div>
  );
};