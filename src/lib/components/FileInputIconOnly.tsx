import React, { useEffect, useState, useRef } from 'react';
import { Box, Button } from '@mui/material';
import { fromEvent, Subscription } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';


type UploadedFile = Partial<File> & { url: string }

type FileInputProps = {
  verbose?: boolean,
  onChange: (
    data: UploadedFile
  ) => void
}

const FileInputIconOnlyEl = (props: FileInputProps) => {
  const { onChange, verbose=false } = props
  const ref = useRef<HTMLInputElement>(null!)

  useEffect(() => {
    if (!ref.current) return
    const subscriptions = new Subscription();
    const changesubscription = fromEvent(ref.current as HTMLInputElement, 'change').pipe(
      map((e: any) => e.target.files && e.target.files[0]),
      filter((file: File | undefined): file is File => file !== undefined), // filter out undefined values
      map((file: File) => {
        verbose &&  console.log("[FileInputEl] inside observable, file:", file)

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
          url: url

        }
      })
    )
      .subscribe(
        (data) => onChange(data)
      )

    subscriptions.add(changesubscription);
    return () => subscriptions.unsubscribe();
  }, [])

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
        p: 1,
        // width:"100%",
        display: 'flex',
        flexGrow: 1

      }}>
      <IconButton aria-label="add photo" sx={{ mr: 0.5 }} onClick={() => ref.current && ref.current.click()}>
        <AddPhotoAlternateIcon />
      </IconButton>
      <input
        accept="image/*"
        style={{
          display: "none"
        }}
        ref={ref}
        type="file"
        onChange={(e: any) => onChange(e.target.files)}

      />
    </Box>

  );
}


export default FileInputIconOnlyEl



