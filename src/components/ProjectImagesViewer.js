import PropTypes from 'prop-types';

function ProjectImagesViewer({ styles, images, isViewerOpen, setIsViewerOpen }) {
  if (!isViewerOpen) return null;

  return (
    <div onClick={() => setIsViewerOpen(!isViewerOpen)}>
      ProjectImagesViewer
    </div>
  )
}

ProjectImagesViewer.propTypes = {
  styles : PropTypes.object,
  images : PropTypes.array,
  isViewerOpen : PropTypes.bool,
  setIsViewerOpen : PropTypes.func
}

export default ProjectImagesViewer