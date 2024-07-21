
export const Modal: React.FC<{ cardType: string; onClick: () => void }> = ({ cardType, onClick }) => {

  let content;

  switch (cardType) {
    case 'dog':
      content = <DogAppContent />;
      break;
    case 'forum':
      content = <ForumAppContent />;
      break;
    case 'review':
      content = <ReviewAppContent />;
      break;
    default:
      break;
  }

  return (
    <div className="modalWrapper">
      <div id="modal" className="modal" onClick={(event) => event.stopPropagation()}>
        {content}
        <button onClick={onClick}>
          <img src="../public/img/top/close.svg" alt="" />
        </button>
      </div>
    </div>
  );
}



function DogAppContent() {
  return (
    <div>
      <div>
        <p className="card__title">Dogアプリ</p>
        <p className="card__info">
          初めて制作したアプリ。Dog APIから犬の画像をランダムに生成します。
        </p>
        <p className="card__info">HTML/CSS/JavaScipt/React</p>
        <div>
          <a href="https://github.com/SaTtto-glitch/DogImageApp" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

function ForumAppContent() {
  return (
    <div>
      <div className="">
        <p className="card__title">掲示板アプリ</p>
        <p className="card__info">
          作成したスレッドにコメントができるアプリ
        </p>
        <p className="card__info">HTML/CSS/javascipt(React)</p>
        <a href="https://github.com/SaTtto-glitch/React-forum" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </div>
    </div>
  );
}

function ReviewAppContent() {
  return (
    <div>
      <div>
        <p className="card__title">書籍レビューアプリ</p>
        <p className="card__info">書籍情報と感想を投稿できるアプリ</p>
        <p className="card-caption-info">
          ログイン機能を作成しました。
        </p>
        <p className="card-caption-info">HTML/CSS/javascipt(React)</p>
        <div>
          <a href="https://github.com/SaTtto-glitch/bookreview-app" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
        <div>
          <a href="https://sattto-glitch.github.io/bookreview-app" target="_blank" rel="noopener noreferrer">
            GitHub Pages
          </a>
        </div>
      </div>
    </div >
  );
}