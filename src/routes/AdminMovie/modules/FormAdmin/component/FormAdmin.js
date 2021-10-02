import React from 'react'
// import DatePicker from "react-datepicker";
import { DatePicker } from 'components';
import moment from 'moment';
import {useHistory} from 'react-router-dom'
import styles from "../../FormAdmin/assets/styles.module.scss";
import '../../../../../../node_modules/antd/dist/antd.css'

export default function FormAdmin({ title, dataMovie, picture, hanldPicture, setDataMovie, submitData, title1 }) {
   const history = useHistory()
    return (
        <div className={styles.formAdmin}>

            <div className={styles.createMovie}>
                <h2>{title}</h2>


                <div className={`form-group w-100 mx-auto ${styles.movieGroup}`}>
                    <label htmlFor="exampleInputPassword1">Tên phim</label>
                    <input type="text"
                        className={`${styles.movieControl} form-control`}
                        value={dataMovie.tenPhim}
                        name='tenPhim'
                        onChange={(e) => setDataMovie({ ...dataMovie, tenPhim: e.target.value })}
                    />
                </div>
                <div className={`form-group w-100 mx-auto ${styles.movieGroup}`}>
                    <label htmlFor="exampleInputPassword1">Bí danh</label>
                    <input type="text"
                        className={`${styles.movieControl} form-control`}
                        value={dataMovie.biDanh}
                        name='biDanh'
                        onChange={(e) => setDataMovie({ ...dataMovie, biDanh: e.target.value })}
                    />
                </div>
                <div className={`form-group w-100 mx-auto ${styles.movieGroup}`}>
                    <label htmlFor="exampleInputPassword1">Trailer</label>
                    <input type="text"
                        className={`${styles.movieControl} form-control`}
                        value={dataMovie.trailer}
                        name='trailer'
                        onChange={(e) => setDataMovie({ ...dataMovie, trailer: e.target.value })}
                    />
                </div>
                <div className={`form-group w-100 mx-auto ${styles.movieGroup}`}>
                    <label htmlFor="exampleInputPassword1">Mô tả</label>
                    <textarea
                        type="text"
                        className={`${styles.movieControl} form-control`}
                        value={dataMovie.moTa}
                        name='moTa'
                        onChange={(e) => setDataMovie({ ...dataMovie, moTa: e.target.value })}
                    />
                </div>
                <div className={`form-group w-100 mx-auto ${styles.movieGroup}`}>
                    <label htmlFor="exampleInputPassword1">Đánh giá</label>
                    <input
                        type="text"
                        className={`${styles.movieControl} form-control`}
                        value={dataMovie.danhGia}
                        name='danhGia'
                        onChange={(e) => setDataMovie({ ...dataMovie, danhGia: e.target.value })}
                    />
                </div>

                <DatePicker key={dataMovie.ngayKhoiChieu} cb={(e) => setDataMovie({ ngayKhoiChieu: e.value })} value={moment(dataMovie.ngayKhoiChieu).format('DD/MM/YYYY')} />
                <div className={`form-group w-100 mx-auto ${styles.moviePicture}`}>
                    <label htmlFor="exampleInputPassword1">Hình ảnh</label>
                    <input type="file" accept='image/*'
                        className={`${styles.pictureControl} form-control`}
                        name='hinhAnh'
                        onChange={hanldPicture}
                    />
                </div>
                <div className={` ${styles.picture}`}>
                    <div className={styles.images}>
                    {
                        picture ? <div className={styles.pictureFlim}><img src={picture} alt='' width='100' height='150' /> </div> : <img src={dataMovie.hinhAnh} alt='' width='100' height='150' />
                    }

                    </div>
                    <div className={styles.btnRest}><button type="submit" className="btn btn-primary" onClick={submitData}>{title1}</button>
                        <button type="submit" className="btn btn-primary" onClick={()=>history.push('/admin')}>Hủy</button>
                    </div>
                </div>


            </div>

        </div>
    )
}
