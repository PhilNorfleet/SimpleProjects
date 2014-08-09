var values = {};
values["two"] = 2;
values["three"] = 3;
values["four"] = 4;
values["five"] = 5;
values["six"] = 6;
values["seven"] = 7;
values["eight"] = 8;
values["nine"] = 9;
values["ten"] = 10;
values["jack"] = 10;
values["queen"] = 10;
values["king"] = 10;
values["ace"] = 11;
Object.prototype.getKey = function(value){
  for(var key in this){
    if(this[key] == value){
      return key;
    }
  }
  return null;
};
function BlackjackHighest(strArr) {
	var count = 0;
	var highest = 0;
	for (var i = 0; i < strArr.length; i ++) {
		count += values[strArr[i]]
		if (values[strArr[i]] >= highest) {
			highest = values[strArr[i]]
		}
	}
	if (count > 21 && strArr.indexOf("ace") != -1) {
		count -= 10;
	}
	if (count > 21) {
		return "above " + values.getKey(highest)
	}
	if (count < 21) {
		return "below " + values.getKey(highest)
	}
	if (count == 21) {
		return "blackjack " + values.getKey(highest)
	}
	return count
}
console.log(BlackjackHighest(["ten","jack"]))
