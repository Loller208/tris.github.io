import { getBoard } from './tic.js';

export function saveBoardState() {
    const textToWrite = getBoard();
    
    // Create a downloadable file
    const blob = new Blob([textToWrite], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'data.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}
