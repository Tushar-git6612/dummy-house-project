import {memo} from 'react';
import { Link } from 'react-router-dom';

function Index() {
  return (
    <>
      {/* <!-- Back to Top --> */}
        <Link to="" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up"></i></Link>
    </>
  )
}

export default memo(Index);