//프로미스 생성
//프로미스 생성결과는 프로미스에 전달된 콜백함수의 처리결과를 랩핑한 프로미스객체를 반환.

//아래 후속처리메소드의 반환값은 프로미스객체다.
//Promise.prototype.then     : 성공시 처리되는 후속메소드
//Promise.prototype.catch    : 실패시 처리되는 후속메소드
//Promise.prototype.finally  : 성공,실패에 관계없이 무조건 1번 호출되는 메소드

//resolve : 비동기로직이 성공할때 호출될 함수
//reject  : 비동기로직이 실패할때 호출될 함수

const promise = new Promise((resolve, reject) => {

    const xhr = new XMLHttpRequest();
    xhr.open('GET', '/todos');
    xhr.send();
    xhr.addEventListener('load', () => {
        if (xhr.status === 200) {
            resolve(JSON.parse(xhr.response));
        } else {
            reject(new Error(xhr.status));
        }   
    });
});


promise.then((res) => { console.log(res.json()); })
    .catch(err => console.log(err))
    .finally(msg => { console.log('처리완료!') });