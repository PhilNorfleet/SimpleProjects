def queen_check (qArr,kArr,nNum)
	moves = 0
	
	if inCheck?(qArr,kArr,nNum)
		for i in -1..1
			for j in -1..1 
				if (kArr[0]+i >= 1 and kArr[0]+i <= nNum and kArr[1]+j >=1 and kArr[1] + j <= 8) 
					if (!inCheck?(qArr,[kArr[0]+i,kArr[1]+j],nNum)) and !(i == 0 and j == 0) 
						moves+=1
					end
					if [kArr[0]+i,kArr[1]+j] == qArr
						moves+=1
					end
				end
			end
		end
	else
		return -1
	end
	return moves
end
def inCheck?(qArr, kArr, nNum)
	if kArr[0] == qArr[0] or kArr[1] == qArr[1]
		return true
	end
	for i in -nNum...nNum
		if (kArr[0] == qArr[0] + i and kArr[1] == qArr[1] + i)
			return true
		end
		if (kArr[0] == qArr[0] + i and kArr[1] == qArr[1] - i)
			return true
		end
	end
	return false 
end
puts queen_check([1,1],[2,2],8)
