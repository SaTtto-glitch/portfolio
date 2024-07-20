import { HandleScroll } from '../components/handleScroll';
import { FVblur } from '../components/FVblur';

export const Top = () => {
    return (
        <main>
            <FVblur />
            <h1 className="fv__title">sayatto</h1>
            <div className="contents">
                <div className='fixedBg'></div>
                <HandleScroll />
                <footer className="footer">
                    <div className="inner"></div>
                </footer>
            </div>
        </main>
    );
}

