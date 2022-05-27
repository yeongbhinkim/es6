//프로미스 생성
//프로미스 생성결과는 프로미스에 전달된 콜백함수의 처리결과를 랩핑한 프로미스객체를 반환.
//resolve : 비동기로직이 성공할때 호출될 함수
//reject  : 비동기로직이 실패할때 호출될 함수

const promise = new Promise((resolve, reject) => {
    //비동기로직
    if(/**비동기 처리 성공 */){
        resolve('success');
    }else{
        reject('error');
    }
});