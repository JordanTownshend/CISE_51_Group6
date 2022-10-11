import React from "react";
import { useForm } from "react-hook-form";
import axios from 'axios';

const SubmissionForm = () => {
  const { register, formState: {errors}, getValues, handleSubmit } = useForm();

  const onSubmit = (e) => {

    const data = {
      title: getValues("title"),
      author: getValues("author"),
      journal: getValues("journal"),
      pubyear: getValues("pubyear"),
      volume: getValues("volume"),
      doi: getValues("doi"),
      issn: getValues("issn"),
      other: getValues("other"),
      status: 'submitted'
    }

    console.log(JSON.stringify(data));

    axios
      .post('https://cise-51-group6-app.herokuapp.com/api/submissions/', data)
      .then(res => {
        console.log("Post response")
      })
      .catch(err => {
        console.log("Error in SubmissionForm!" + err);
      })
  };
  

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
    
      <input {...register("author", {required: true})} placeholder="Author" data-testid = "author"/>
      <p><input {...register("title", {required: true})} placeholder="Title" data-testid = "title"/></p>
      <p><input {...register("journal", {required: true})} placeholder="Journal" data-testid = "journal"/></p> 
      <p><input {...register("pubyear", {required: true})} placeholder="Publication Year" data-testid = "pubyear"/></p>
      <p><input {...register("volume")} placeholder="Volume No." data-testid = "volume"/></p>
      <p><input {...register("doi")} placeholder="DOI" data-testid = "doi"/></p>
      <p><input {...register("issn")} placeholder="ISSN" data-testid = "issn"/></p>
      <p><input {...register("other")} placeholder="Other" data-testid = "other"/></p>

      <p>{errors.author && <span>Author field is required</span>}</p>
      <p>{errors.title && <span>Title field is required</span>}</p>
      <p>{errors.journal && <span>Journal field is required</span>}</p>
      <p>{errors.pubyear && <span>Publication Year field is required</span>}</p>

      <input type="submit" />
    </form>
  );
}

export default SubmissionForm;
