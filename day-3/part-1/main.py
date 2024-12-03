import re

pattern = r"mul\(\d{1,3},\d{1,3}\)"
inputFile = open('input.txt', 'r')
inputStrings = inputFile.readlines()
ans = 0 
for inputString in inputStrings:
    matches = re.findall(pattern, inputString)
    numPattern = r"\d+"
    for num in matches:
        digits = re.findall(numPattern, num)
        ans = ans + (int(digits[0]) * int(digits[1]))
    

print(ans)
inputFile.close()