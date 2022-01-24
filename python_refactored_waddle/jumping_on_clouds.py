from itertools import combinations_with_replacement
def jumping_on_clouds(c):
    """There is a new mobile game that starts with consecutively numbered clouds.
    Some of the clouds are thunderheads and others are cumulus. The player can
    jump on any cumulus cloud having a number that is equal to the number of the
    current cloud plus  or . The player must avoid the thunderheads. Determine the
    minimum number of jumps it will take to jump from the starting postion to the
    last cloud. It is always possible to win the game. For each game, you will get
    an array of clouds numbered  if they are safe or  if they must be avoided."""
    if len(c) == 1 : return 0
    if len(c) == 2: return 0 if c[1]==1 else 1
    if c[2]==1: 
        return 1 + jumping_on_clouds(c[1:])
    if c[2]==0:
        return 1 + jumping_on_clouds(c[2:])

print(jumping_on_clouds([0,0,1,0,0,1,0]))
# 4