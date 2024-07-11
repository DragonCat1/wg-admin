class Login {
  private _isLogin: boolean = false

  public get isLogin(): boolean {
    return this._isLogin
  }

  public login(pwd?: string): boolean {
    this._isLogin = false
    return this._isLogin
  }
}

export default Login
