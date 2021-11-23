import React from 'react';
import './Definitions.css';

const Definitions = ({ word, category, meanings, LightMode }) => {
  return (
    <div className="meanings">
      {meanings[0] && word && category === 'en' && (
        <audio
          controls
          src={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio}
          style={{
            borderRadius: 10,
          }}
        >
          Your Browser doesn't support audio element.
        </audio>
      )}

      {word === '' ? (
        <span className="subTitle">Start by tryping a word in Search</span>
      ) : (
        meanings.map((mean) =>
          mean.meanings.map((item) =>
            item.definitions.map((def) => (
              <div
                className="singleMean"
                style={{
                  backgroundColor: LightMode ? '#3b5360' : 'white',
                  color: LightMode ? 'white' : 'black',
                }}
              >
                <b>{def.definition}</b>
                <hr style={{ backgroundColor: 'black', width: '100%' }} />
                {def.example && (
                  <span>
                    <b>Example: </b>
                    {def.example}
                  </span>
                )}

                {def.synonyms.length === 0
                  ? null
                  : def.synonyms && (
                      <span>
                        <b>Synonyms: </b>
                        {def.synonyms.map((s) => `${s}, `)}
                      </span>
                    )}
              </div>
            ))
          )
        )
      )}
    </div>
  );
};

export default Definitions;
