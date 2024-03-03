import React from "react";

export interface IMovieInfo {
  title: string;
  year: string;
  rating: number;
  runtime: number;
  medium_cover_image: string;
  torrents: [];
}

export interface IMovieTorrets {
  url: string;
  size: string;
}

export const MovieInfo: React.FC<IMovieInfo> = ({
  title,
  year,
  rating,
  runtime,
  medium_cover_image,
  torrents,
}) => {
  return (
    <div className=" bg-gray-700 p-4">
      <div className="grid place-content-center">
        <img
          src={medium_cover_image}
          className="max-w-xl"
          alt="medium_cover_image"
        />
      </div>
      <div className="text-white">
        <h1 className="text-xl font-bold">{title}</h1>
        <h1>{year}</h1>
        <h1>{rating}</h1>
        <h1>{runtime}</h1>
      </div>
      <div>
        {torrents.map((torrent: IMovieTorrets) => (
          <div
            key={torrent.url}
            className="text-white bg-black px-4 py-2 rounded-full"
          >
            <a href={torrent.url} className="text-blue-500 underline">
              Download
            </a>
            <p> {torrent.size} </p>
          </div>
        ))}
      </div>
    </div>
  );
};
