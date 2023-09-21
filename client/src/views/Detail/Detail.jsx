import style from './Detail.module.css';
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getDriversById } from '../../redux/actions';


function Detail() {

  const { driversByID } = useSelector((state) => state);
  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {

    (async () => {
      try {
        await dispatch(getDriversById(id));

      } catch (error) {
        alert("There are no drivers with that ID")
      }
    })();

  }, [id]);

  let imageToShow = driversByID?.image

  if (driversByID?.image?.data) {

    const byteArray = new Uint8Array(driversByID?.image?.data);
    const blob = new Blob([byteArray], { type: 'image/png' });
    imageToShow = URL.createObjectURL(blob);
  }

  return (
    <div className={style.container}>
      <img className={style.image} src={imageToShow} alt='Driver photo' />

      <div className={style.driverData}>
        <h2 className={style.id}>ID: {driversByID?.id}</h2>
        <h2 className={style.forename}>Forename: {driversByID?.forename}</h2>
        <h2 className={style.surname}>Surname: {driversByID?.surname}</h2>
        <h2 className={style.nationality}>Nationality: {driversByID?.nationality}</h2>
        <h2 className={style.teams}>Teams: {driversByID?.teams}</h2>
        <h2 className={style.dob}>Date of Birth: {driversByID?.dob}</h2>
        <h2 className={style.description}>Description: {driversByID?.description}</h2>
      </div>

    </div>
  )
}

export default Detail;