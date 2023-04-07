'''
Author: Long Yunfei
Date: 2023-04-05 22:03:00
LastEditTime: 2023-04-05 22:06:41
Copyright: 2023 BJTU. All Rights Reserved.
Descripttion: 
'''

'''
brief: 函数实现归并排序
param {*} lists
return {*}
'''
def merge_sort(lists):
    # 递归的出口
    if len(lists) <= 1:
        return lists
    # 递归的过程
    num = int(len(lists) / 2)
    left = merge_sort(lists[:num])
    right = merge_sort(lists[num:])
    return merge(left, right)
# 合并
def merge(left, right):
    # left与right都是有序的
    r, l = 0, 0
    result = []
    while l < len(left) and r < len(right):
        if left[l] < right[r]:
            result.append(left[l])
            l += 1
        else:
            result.append(right[r])
            r += 1
    result += right[r:]
    result += left[l:]
    return result
if __name__ == '__main__':
    a = [1, 3, 5, 7, 9, 2, 4, 6, 8, 10]
    print(merge_sort(a))

