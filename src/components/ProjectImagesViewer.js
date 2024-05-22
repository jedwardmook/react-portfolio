import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import close from '../icons/close.svg';

function ProjectImagesViewer({ styles, images, isViewerOpen, setIsViewerOpen }) {
  const [heroImage, setHeroImage] = useState();

  useEffect(() => {
    setHeroImage(images[0]);
  }, [images]);

  if (!isViewerOpen) return null;

  return (
    <div className={styles['image-viewer-background']}>
      <div className={styles['image-viewer-close-container']}>
        <button className={styles['image-viewer-close']} onClick={() => setIsViewerOpen(!isViewerOpen)}><img src={close} /></button>
      </div>
      <div className={styles['image-viewer-container']}>
        <div className={styles['image-viewer-hero-container']}>
          <img className={styles['image-viewer-hero-image']} src={heroImage.link} alt={heroImage.description}/>
          <p className={styles['image-viewer-hero-description']}>{heroImage.description}</p>
        </div>
        <div className={styles['image-viewer-tray']}>
          {images.map((image) => {
            return <img key={image.description} alt={image.description} src={image.link} className={styles['image-viewer-tray-image']} onClick={() => setHeroImage(image)}/>;
          })}
        </div>
      </div>
    </div>
  );
}

ProjectImagesViewer.propTypes = {
  styles : PropTypes.object,
  images : PropTypes.array,
  isViewerOpen : PropTypes.bool,
  setIsViewerOpen : PropTypes.func
};

export default ProjectImagesViewer;
