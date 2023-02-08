class Go {
    private board: number[][];
    private currentPlayer: 'black' | 'white';
  
    constructor() {
      this.board = [];
      for (let i = 0; i < 19; i++) {
        this.board[i] = [];
        for (let j = 0; j < 19; j++) {
          this.board[i][j] = 0;
        }
      }
      this.currentPlayer = 'black';
    }
  
    public play(x: number, y: number): boolean {
      if (this.board[x][y] !== 0) {
        return false;
      }
      this.board[x][y] = this.currentPlayer === 'black' ? 1 : 2;
      this.currentPlayer = this.currentPlayer === 'black' ? 'white' : 'black';
      return true;
    }
  
    public getBoard(): number[][] {
      return this.board;
    }
  
    public getCurrentPlayer(): 'black' | 'white' {
      return this.currentPlayer;
    }
  }