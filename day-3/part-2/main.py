import re

with open("input.txt", "r") as file:
    memory = file.read()

mul_pattern = r"mul\((\d{1,3}),(\d{1,3})\)"
do_pattern = r"do\(\)"
dont_pattern = r"don't\(\)"

is_enabled = True
result = 0

tokens = re.split(r"(mul\(\d{1,3},\d{1,3}\)|do\(\)|don't\(\))", memory)

for token in tokens:
    token = token.strip()
    print(token)
    
    if re.match(do_pattern, token):
        is_enabled = True
    elif re.match(dont_pattern, token):
        is_enabled = False
    elif re.match(mul_pattern, token):
        if is_enabled:
            x, y = map(int, re.findall(r"\d{1,3}", token))
            result += x * y


print(result)
