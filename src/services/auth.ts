export default function signIn() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: 'asdasdasdasdadasdasdasda adasdwqdqwdwq',
        user: {
          name: 'Natália',
          email: 'naaatalia.azevedo@live.com',
        },
      });
    }, 2000);
  });
}
