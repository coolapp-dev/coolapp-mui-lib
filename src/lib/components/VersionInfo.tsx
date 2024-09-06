import React, {useState, useEffect } from 'react'
import Divider from '@mui/material/Divider';
import { ExpandableListItemWithIcon } from "./ExpandableListItemWithIcon";
import { Button, Box } from '@mui/material';
import CopyrightIcon from '@mui/icons-material/Copyright';


type VersionInfoObj = {
    sha:string,
    tag: string,
    date:string
}


const VersionInfo = ()=>{

    const [version_info, set_version_info] = useState<VersionInfoObj|null>(null)

    useEffect(()=>{

        fetch("/version.json", {
            method:"GET", 
            
            })
            .then(response => {
              if (response.ok) return response.json();
              else throw Error(`Server returned ${response.status}: ${response.statusText}`)
            })
            .then((data)=>{

              console.log("fetch data finish", data)
              set_version_info(data)
            })
        

    },[])

    return(
        <Box   component="div">
          <Divider />                        
          <ExpandableListItemWithIcon 
                title={"My.App@2024"}
                subheader={version_info?`v:${version_info.tag} :: sha:${version_info.sha}`:"unknown"} 
                icon={<CopyrightIcon />} 
                expanded={false}
                expand={()=>{}}
                    
            >
            </ExpandableListItemWithIcon>
        </Box>

    )
}



export default VersionInfo