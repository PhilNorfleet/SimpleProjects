def KnightJumps(str)
  kMoves = [[2,-1],[2,1],[1,2],[-1,2],[-2,1],[-2,-1],[-1,-2],[1,-2]]
  x = str.split(' ')[0][1].chr.to_i
  y = str.split(' ')[1][0].chr.to_i
  count = 0;
  for i in 0...kMoves.length
    if (x + kMoves[i][0] >= 1 and x + kMoves[i][0] <=8 and y + kMoves[i][1] >= 1 and y + kMoves[i][1] <=8)
      count += 1
    end
  end
  return count
         
end
