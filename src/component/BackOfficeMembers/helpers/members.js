export const titleHandler = (e, testimonials, setTestimonials) => {
  testimonials[e.target.id] = e.target.value;
  setTestimonials({ ...testimonials });
};

export const handleImg = (e, setImg, formData, setFormData) => {
  setImg(URL.createObjectURL(e.target.files[0]));
  const image = e.target.files[0];
  formData.append("image", image);
  setFormData(formData);
};
