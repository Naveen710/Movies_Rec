import React, { useState } from "react";
import "./styles.css";

const AllMovies = {
  Comedy: [
    {
      Title: "Ala Vaikunthapuramulo",
      Description:
        "After growing up enduring criticism from his father, a young man finds his world shaken upon learning he was switched at birth with a millionaire’s son.",
      poster: "./images/AlaVai.jpg",
      Rating: `7.3/10`
    },
    {
      Title: "Bhool Bhulaiya 2",
      Description:
        "When strangers Reet and Ruhan cross paths, their journey leads to an abandoned mansion and a dreaded spirit who has been trapped for 18 years.",
      poster: "./images/bhool.jpg",
      Rating: `5.7/10`
    },
    {
      Title: "Ante Sundaraniki",
      Description:
        "When sparks fly between childhood friends Sundar and Leela, they hatch a plan to persuade their conservative families to accept an interfaith romance.",
      poster: "./images/ante.jpg",
      Rating: `7.7/10`
    }
  ],
  Thriller: [
    {
      Title: "Goodachari",
      Description:
        "A young NSA agent is framed for the murder of his bosses making him realize that now his mission is darker than expected and has some personal scores to settle regarding his father's death, a former NSA agent.",

      poster: "./images/good.jpg",
      Rating: `7.8/10`
    },

    {
      Title: "Evaru",
      Description:
        "Sub-inspector Vikram Vasudev is entrusted with the task of investigating the murder of a high ranking officer who was killed by his alleged rape victim. When he delves deeper into the case he uncovers some surprising facts.",
      poster: "./images/evaru.jpg",
      Rating: `8.2/10`
    },

    {
      Title: "Agent Sai Sreenivasa Athreya",
      Description:
        "Agent Sai Srinivasa Athreya is an authentic humorous investigative thriller revolving around the adventures of a detective based out of Nellore.",
      poster: "./images/agent.jpg",
      Rating: `8.4/10`
    }
  ],

  Action: [
    {
      Title: "RRR",
      Description:
        "A fictitious story about two legendary revolutionaries and their journey away from home before they started fighting for their country in 1920s.",
      poster: "./images/rrr.jpg",
      Rating: `8/10`
    },
    {
      Title: "KGF 2",
      Description:
        "In the blood-soaked Kolar Gold Fields, Rocky's name strikes fear into his foes. While his allies look up to him, the government sees him as a threat to law and order. Rocky must battle threats from all sides for unchallenged supremacy.",
      poster: "./images/kgf.jpg",
      Rating: `8.4/10`
    },
    {
      Title: "Vikram",
      Description:
        "A high-octane action film where a special investigator is assigned a case of serial Killings, he finds the case is not what it seems to be and leading down this path is only going to end in a war between everyone involved.",
      poster: "./images/vik.jpg",
      Rating: `8.4/10`
    }
  ]
};
var genreNames = Object.keys(AllMovies);

export default function App() {
  var [moviesList, setmoviesList] = useState("Comedy");

  function clickHandler(genre) {
    setmoviesList(genre);
  }
  return (
    <div className="App">
      <h1 className="heading">
        <span role="img" aria-label="emoji">
          📺
        </span>{" "}
        Best Movies of 2022
      </h1>
      <p className="sub-heading">
        Checkout best movies. Select a genre to get started
      </p>
      {genreNames.map((item) => {
        return (
          <button
            id="button"
            onClick={() => clickHandler(item)}
            className="btn-genre"
          >
            {item}
          </button>
        );
      })}
      <hr />
      <div className="main-div">
        {AllMovies[moviesList].map((movie) => {
          return (
            <table>
              <tr>
                <td className="td-movie-name">{movie.Title}</td>
                <td className="td-img" rowSpan="3">
                  <img src={movie.poster} alt="" />
                </td>
              </tr>
              <tr>
                <td className="td-description">{movie.Description}</td>
              </tr>
              <tr>
                <td className="td-rating">IMDB:{movie.Rating}</td>
              </tr>
            </table>
          );
        })}
      </div>
    </div>
  );
}
