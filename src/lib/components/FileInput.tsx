import React, { useEffect, useState, useRef } from 'react'; 
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import {Box, Button} from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import { fromEvent  } from 'rxjs';
import { map } from 'rxjs/operators';

import { type ButtonProps   } from '@mui/material/Button';

type CustomButtonProps = Partial<Pick<ButtonProps, 'color' | 'variant' | 'fullWidth' >>;


type UploadedFile = Partial<File> & {url:string}

 
type FileInputProps =   {
    onChange: (
      data: UploadedFile
    )=>void,
    label?:string
    buttonProps: CustomButtonProps
}

const buttonDefaults:CustomButtonProps = {
  variant:"outlined",
  color:"primary",
  fullWidth: true
}
const FileInputEl = (props:FileInputProps)=> {

 const {onChange, label="Upload", buttonProps} = props
 const ref = useRef<HTMLInputElement>(null!)

 useEffect(()=>{
  if(!ref.current) return


  fromEvent( ref.current as HTMLInputElement, 'change').pipe(
    map((e:any)=>e.target.files && e.target.files[0]),
    map((file:File)=> {
      console.log("[FileInputEl] inside observable, file:", file)

      const {
        name,
        size, 
        type,
        lastModified
      } = file



      const url = URL.createObjectURL(file) 

      return {
        ...{
          name,
          size, 
          type,
          lastModified
        },
        url:url
        
      }
    })
  )
  .subscribe(
    (data)=> onChange(data)
  )

},[])

// sample onChange input
// {
//   "name": "460984237_10232419804748017_6955463768385610534_n.jpg",
//   "size": 138195,
//   "type": "image/jpeg",
//   "lastModified": 1726994152262,
//   "url": "blob:http://localhost:6006/94168ba8-ee84-41d0-8592-78bd5d17a4bf"
// }
 
  return (
 <Box 
    component="div"

    sx={{
      p:1,
     // width:"100%",
      display: 'flex',
      flexGrow: 1
     
  }}>
    
   
<Button
    sx={{
      width:"100%",
    }}
    variant={buttonProps.variant ?? buttonDefaults.variant}
    color={buttonProps.color ?? buttonDefaults.color}
    fullWidth={buttonProps.fullWidth ?? buttonDefaults.fullWidth}

    
    startIcon={<AddAPhotoIcon />}
    onClick={()=> ref.current && ref.current.click()}
    >
    {label}
    </Button>
    <input
        accept="image/*"
        style={{
            display:"none"
        }}
        ref={ref}
        type="file"
        //onChange={(e:any)=>onChange(e.target.files)}

    />
  
      
    </Box>
 
  );
}


export default FileInputEl



