
const Frame = () => {
  return (
    <div>
            <input type="checkbox" id="toggle" className="toggle"></input>
        <div className="frame">
            <div className="appContainer">
                <div className="iconSection">
                    <div className="datetime flex-center">
                        <div>12:32am</div>
                        <label htmlFor="toggle" className="toggle-label">
                            <i className="fa-solid fa-toggle-off"></i>
                        </label>
                    </div>
                    <div className="camera"></div>
                    <div className="rightIcons">
                        <i className="fa-solid fa-wifi"></i>
                        <i className="fa-solid fa-signal"></i>
                        <i id="battry"className="fa-solid fa-battery-half"></i>

                    </div>
                </div>
                    <div className="calculator">
                    <div className="screenSection"></div>
                    <div className="buttonSection">
                        <div className="btn special-btn">C</div>
                        <div className="btn special-btn">DEL</div>
                        <div className="btn special-btn">%</div>
                        <div className="btn opt-btn">/</div>
                        <div className="btn">7</div>
                        <div className="btn">8</div>
                        <div className="btn">9</div>
                        <div className="btn opt-btn">x</div>
                        <div className="btn">4</div>
                        <div className="btn">5</div>
                        <div className="btn">6</div>
                        <div className="btn opt-btn">-</div>
                        <div className="btn">1</div>
                        <div className="btn">2</div>
                        <div className="btn">3</div>
                        <div className="btn opt-btn">+</div>
                        <div className="btn double-btn">0</div>
                        <div className="btn">.</div>
                        <div className="btn opt-btn">=</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Frame
