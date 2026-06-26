import React, { useRef, useEffect } from 'react'

const Canvas = props => {

    const canvasRef = useRef(null)
    const isDrawing = useRef(false);

    const startDrawing = (e) => {
        isDrawing.current = true
        const ctx = canvasRef.current.getContext('2d')
        ctx.beginPath()
        ctx.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY)
    }

    const draw = (e) => {
        if (!isDrawing.current) return
        const ctx = canvasRef.current.getContext('2d')
        ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY)
        ctx.stroke()
    }

    function clearCanvas () {
        const canvas = canvasRef.current;
        if (!canvas) return;
        
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  
    return (
        <div> 
        <canvas
            style={{border: "4px solid #000000"}}
            ref={canvasRef}
            width={500}
            height={500}
            onMouseDown={startDrawing}
            onMouseMove={draw}
            onMouseUp={() => isDrawing.current = false}
            onMouseLeave={() => isDrawing.current = false}
        />

        <div>
            <button 
            onClick={clearCanvas}>Clear</button>
            <button>Submit</button>
            </div>
        </div>
    );
}

export default Canvas