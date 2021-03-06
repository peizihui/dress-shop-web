const SkeletonCart = () => {
  return (
    <>
      {[...Array(3)].map((_, i) => (
        <div className="container" key={i}>
          <div style={{ display: 'flex', width: '20rem' }}>
            <div className="box"></div>
          </div>
          <div className="right">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </div>
      ))}
      <div className="bottom">
        <div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          margin-bottom: 2rem;
        }
        .box {
          width: 15rem;
          height: 15rem;
          background-color: #eee;
          margin-right: 2rem;
        }

        .line {
          background-color: #eee;
          height: 3rem;
          width: 20rem;
          margin-right: 1rem;
        }

        .right {
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .right .line {
          margin-top: 2rem;
        }

        .bottom {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          padding: 2rem;
        }

        @media only screen and (min-width: 768px) {
          .right {
            flex-direction: row;
          }

          .right .line {
            width: 20rem;
            flex: 1;
          }
        }
      `}</style>
    </>
  );
};

export default SkeletonCart;
