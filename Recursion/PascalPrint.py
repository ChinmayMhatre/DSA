def pp(line_number):

    if line_number == 0:
        return [1]

    else:
        line = [1]

        last_line = pp(line_number - 1)
        print(type(last_line))
        for i in range(len(last_line) - 1):
            line.append(last_line[i] + last_line[i+1])
        line += [1]
    return line


print(pp(5))    