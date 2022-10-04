import React, { useState } from "react";
import { useForm } from "react-hook-form";

const SubmissionForm = () => {
  const { register, handleSubmit, formState: {errors} } = useForm();
  const [result, setResult] = useState("");
  const onSubmit = (data) => setResult(JSON.stringify(data));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
    
      <input {...register("author", {required: true})} placeholder="Author" />
      <p><input {...register("title", {required: true})} placeholder="Title" /></p>
      <p><input {...register("journal", {required: true})} placeholder="Journal" /></p> 
      <p><input {...register("pubyear", {required: true})} placeholder="Publication Year" /></p>
      <p><input {...register("volume")} placeholder="Volume No." /></p>
      <p><input {...register("doi")} placeholder="DOI" /></p>
      <p><input {...register("issn")} placeholder="ISSN" /></p>
      <p><input {...register("other")} placeholder="Other" /></p>

      <p>{errors.author && <span>Author field is required</span>}</p>
      <p>{errors.title && <span>Title field is required</span>}</p>
      <p>{errors.journal && <span>Journal field is required</span>}</p>
      <p>{errors.pubyear && <span>Publication Year field is required</span>}</p>

      <p>{result}</p>
      <input type="submit" />
    </form>
  );
}
export default SubmissionForm;
