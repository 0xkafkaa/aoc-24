import re

MULPATTERN = r"mul\(\d{1,3},\d{1,3}\)"
inputFile = open('inputUpdated', 'r')
inputStrings = inputFile.readlines()
ans = 0 
for inputString in inputStrings:
    start_string = "don't()"
    end_string = "do()"
    pattern = fr"{start_string}.*?{end_string}"
    inputString = re.sub(pattern, "", inputString)
    inputString = re.sub(r"\s+", " ", inputString).strip()
    matches = re.findall(MULPATTERN, inputString)
    numPattern = r"\d+"

    for num in matches:
        digits = re.findall(numPattern, num)
        ans = ans + (int(digits[0]) * int(digits[1]))

print(ans)    