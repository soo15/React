import './style.css';

import Members from './question/Members';

const excute = () => {
    const targetEl = document.querySelector('#result');

    const member = Members({ list: [] });
    targetEl.appendChild(member);
};

excute();