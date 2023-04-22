const logout = () =>{
    // event.preventDefault();
    sessionStorage.removeItem('user');
    window.location.replace('/');
  }
export default logout;