import React, { useEffect } from "react";
import memesActions from "../redux/actions/memes.actions";
import { useDispatch, useSelector } from "react-redux";

const GalleryPage = () => {
  const dispatch = useDispatch();
  const memes = useSelector((state) => state.memes.memes);
  const loading = useSelector((state) => state.memes.loading);

  useEffect(() => dispatch(memesActions.getMemes()), [dispatch]);
  return (
    <div className="flex items.center justify-around px-4 py-8 space-x-4 w-9/12">
      {!loading ? (
        memes.memes.map((meme) => (
          <li key={meme.id}>
            <img
              src={`${process.env.REACT_APP_BACKEND_API}${meme.outputMemePath}`.replace(
                "apipublic/",
                ""
              )}
              alt="meme"
            ></img>
          </li>
        ))
      ) : (
        <h1 className="justify-self-center py-40">Loading</h1>
      )}
    </div>
  );
};

export default GalleryPage;
