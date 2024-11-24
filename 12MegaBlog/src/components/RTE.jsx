import React from 'react'
import { Editor } from '@tinymce/tinymce-react';
import {Controller} from "react-hook-form"

export default function RTE({name , control , label , defaultValue = ""}) {
  return (
    // <Editor
    // initialValue='Default value'
    // init={
    //     {
    //         branding : false,
    //         height:500,
    //         menubar:true,
    //         plugins:[
    //             'advlist autoLink lists link image charmap print preview anchor',
    //             'searchreplace , visualblocks code fullscreen',
    //             'insertdatetime media table paste code help wordcount'
    //         ],
    //         toolbar:
    //         'undo repo | formatselect | bold italic backcolor | \
    //          alignleft aligncenter alignright alignjustify |\
    //           bullist numlist outdent indent | removeformat |'
    //     }
    // }
    // />
        <div className='w-full'>
            {label} && <label className='text-sm text-gray-600 ' >{label}</label>
            <Controller
            name = {name || "content"}
            control={control}
            render={({field : {onChange}}) => (
                <Editor
                apiKey='twofwirsbtrzp96ckzj6w5mtehcl7eqdpx5zt9dlvuiimedt'
                initialValue={defaultValue}
                init={{
                initialValue: defaultValue,
                height: 500,
                menubar: true,
                plugins: [
                    "image",
                    "advlist",
                    "autolink",
                    "lists",
                    "link",
                    "image",
                    "charmap",
                    "preview",
                    "anchor",
                    "searchreplace",
                    "visualblocks",
                    "code",
                    "fullscreen",
                    "insertdatetime",
                    "media",
                    "table",
                    "code",
                    "help",
                    "wordcount",
                    "anchor",
                ],
                toolbar:
                "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
                content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                
        }}
        onEditorChange={onChange}
        />

            )}
            />
            
        </div>
  )
}


