from re import IGNORECASE, findall, search

header = "|Runtime|percentile|Memory Usage|percentile|Runtime Diff|Memory Diff|\n| ---- | ---- | ---- | ---- | ---- | ---- |\n|"


def start(word):
    runtime = search("(\d+\sms)", word, flags=IGNORECASE)
    runtimepercentage = search("(\d+\.\d+\%)", word, flags=IGNORECASE)
    memory = search("(\d+\.\d+\smb)", word, flags=IGNORECASE)
    memorypercentage = findall("(\d+\.\d+\%)", word, flags=IGNORECASE)

    return f"{runtime.group(0) if runtime else ''} |{runtimepercentage.group(0) if runtimepercentage else ''} |{memory.group(0) if memory else ''} |{memorypercentage[-1]}| ||\n"


leet_code_submissions = {
    "py771": "Runtime: 32 ms, faster than 53.71% of Python3 online submissions for Jewels and Stones. Memory Usage: 14.2 MB, less than 44.99% of Python3 online submissions for Jewels and Stones.",
    "js1512": "Runtime: 76 ms, faster than 78.95% of JavaScript online submissions for Number of Good Pairs. Memory Usage: 38.1 MB, less than 93.17% of JavaScript online submissions for Number of Good Pairs.",
    "py1512": "Runtime: 24 ms, faster than 97.64% of Python3 online submissions for Number of Good Pairs. Memory Usage: 14.2 MB, less than 41.68% of Python3 online submissions for Number of Good Pairs.",
    "js1470": "Runtime: 84 ms, faster than 82.89% of JavaScript online submissions for Shuffle the Array. Memory Usage: 40.1 MB, less than 96.48% of JavaScript online submissions for Shuffle the Array.",
    "py1470": "Runtime: 60 ms, faster than 61.46% of Python3 online submissions for Shuffle the Array. Memory Usage: 14.4 MB, less than 75.84% of Python3 online submissions for Shuffle the Array.",
    "rs1470": "Runtime: 0 ms, faster than 100.00% of Rust online submissions for Shuffle the Array. Memory Usage: 2.2 MB, less than 35.23% of Rust online submissions for Shuffle the Array.",
    "js1431": "Runtime: 80 ms, faster than 66.09% of JavaScript online submissions for Kids With the Greatest Number of Candies. Memory Usage: 38.0 MB, less than 99.31% of JavaScript online submissions for Kids With the Greatest Number of Candies.",
    "py1431": "Runtime: 40 ms, faster than 47.71% of Python3 online submissions for Kids With the Greatest Number of Candies. Memory Usage: 14.3 MB, less than 53.89% of Python3 online submissions for Kids With the Greatest Number of Candies.",
    "rs1431": "Runtime: 0 ms, faster than 100.00% of Rust online submissions for Kids With the Greatest Number of Candies. Memory Usage: 2.1 MB, less than 66.36% of Rust online submissions for Kids With the Greatest Number of Candies.",
    "js1672": "Runtime: 72 ms, faster than 92.72% of JavaScript online submissions for Richest Customer Wealth. Memory Usage: 38.6 MB, less than 57.67% of JavaScript online submissions for Richest Customer Wealth.",
    "py1672": "Runtime: 52 ms, faster than 71.15% of Python3 online submissions for Richest Customer Wealth. Memory Usage: 14.2 MB, less than 58.25% of Python3 online submissions for Richest Customer Wealt",
    "rs1672": "Runtime: 0 ms, faster than 100.00% of Rust online submissions for Richest Customer Wealth. Memory Usage: 2.2 MB, less than 36.00% of Rust online submissions for Richest Customer Wealth.",
}
this = "".join([start(value) for key, value in leet_code_submissions.items()])
header += this
with open("./stats", "w") as f:
    f.write(header)
# start()
