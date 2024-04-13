import styles from "./index.module.scss";

import { HTTP_POST, HTTP_GET } from "../../../libs/HTTP";
import { useEffect, useState } from "react";
import { MdAddPhotoAlternate } from "react-icons/md";

import Button from "../button";
import ImageProfile from "../imageProfile";
import Input from "../input";

const AddEvent = ({ userId }) => {
  const [categories, setCategories] = useState([]);
  const [image, setImage] = useState(null);
  const [formData, setFormData] = useState({
    organizerId: `${userId}`,
    category: "",
    capacity: 0,
    title: "",
    description: "",
    date: "",
    time: "",
    poster: null,
    city: "",
    place: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (image) => {
    setFormData({
      ...formData,
      poster: image,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await HTTP_POST("events", formData);
      console.log("Event added success:", response.data);
    } catch (error) {
      console.error("Error add event:", error);
    }
  };

  useEffect(() => {
    const getCategories = async () => {
      const categories = await HTTP_GET("categories");
      setCategories(categories);
    };
    getCategories();
  }, []);

  return (
    <div className={styles.AddEvent}>
      <h1>Aggiungi evento</h1>
      <form onSubmit={handleSubmit} className={styles.FormAddEvent}>
        <select
          name="category"
          onChange={handleChange}
          className={styles.SelectForm}
        >
          {categories.map((category, key) => (
            <option key={key} value={category.name}>
              {category.name}
            </option>
          ))}
        </select>
        <div className={styles.Box_Input}>
          <Input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Titolo evento"
          />
        </div>
        <div className={styles.Box_Input}>
          <Input
            type="number"
            name="capacity"
            value={formData.capacity}
            onChange={handleChange}
            placeholder="Numero biglietti"
          />
        </div>
        <Input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Descrizione evento"
        />
        <div className={styles.Box_Input}>
          <Input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />
        </div>
        <Input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
        />
        <p>Carica un'immagine dell'evento</p>
        <div className={styles.Box_Input}>
          <ImageProfile
            onImageChange={handleImageChange}
            icon={<MdAddPhotoAlternate />}
            type="events"
          />
        </div>
        <Input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
          placeholder="Città"
        />
        <div className={styles.Box_Input}>
          <Input
            type="text"
            name="place"
            value={formData.place}
            onChange={handleChange}
            placeholder="Luogo"
          />
        </div>
        <Input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Indirizzo"
        />
        <Button type="submit" value="Salva" />
      </form>
    </div>
  );
};

export default AddEvent;
