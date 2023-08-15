import React from 'react'
import { useColors } from '../hooks/useColor'

const ColorPicker = ({color, colorList, handlerChangeColor, HandleSubmitSaveColor}) => {

  
  return (
    <>
      <form onSubmit={HandleSubmitSaveColor}>
      <input 
        type="color" 
        className="form-control" 
        style={{
          width:"100%",
          height:"300px",
        }
        }
        title="seleccione el color..."
        value={color}
        onChange={handlerChangeColor}
      />
      <div className='text-center'>
        <h2 className='mt-3 fw-folder'>
          <div style={{
            width:"20px",
            height:"20px",
            background: color,
            display: "inline-block",
            margin: "0 1rem",
            borderRadius: "100%"
          }}></div>
          {color}
        </h2>
        <button type='submit' className='btn btn-success'>Guardar Color</button>
      </div>
      </form>

    </>
    
  )
}

export default ColorPicker
