'use client';
 
import type { PutBlobResult } from '@vercel/blob';
import { useState, useRef } from 'react';
import styles from "./createMenu.module.css";

const CreateMenu = () => {
    const inputFileRef = useRef<HTMLInputElement>(null);
    const titleRef = useRef<HTMLInputElement>(null);
    const descriptionRef = useRef<HTMLInputElement>(null);

    const uploadImage = async (formData: FormData) => {
        const response = await fetch('/api/uploadImage', {
            method: 'POST',
            body: formData,
        })

        console.log('hello1')

        const newBlob = (await response.json()) as PutBlobResult
        uploadItem(newBlob.url, formData)
    }

    const uploadItem = async (imgUrl: string, formData: FormData) => {
        const title = formData.get('title')
        const description = formData.get('description')

        const response = await fetch('/api/item', {
            method: 'POST',
            body: JSON.stringify({
                title,
                description,
                imagePath: imgUrl
            })
        })
    }

    return (
        <div className={styles.main}>
            <form className={styles.form} action={uploadImage}>
                <div className={styles.inputs}>
                    <label className={styles.label}>Name</label>
                    <input className={styles.textInput} type="text" ref={titleRef} id="title" name="title"/>
                    <label className={styles.label}>Description</label>
                    <input className={styles.textInput} type="text" ref={descriptionRef} id="description" name="description"/>
                    <label className={styles.label}>Image</label>
                    <input className={styles.textInput} type="file" ref={inputFileRef} accept=".png,.jpeg,.webp,.psd,.avif,.svg,.heic" id="file-upload" name="file"/>
                </div>
                <button className={styles.submit} type="submit">Create</button>
            </form>
        </div>
    )
}

export default CreateMenu