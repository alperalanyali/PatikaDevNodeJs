22,27,16,2,18,6] -> Insertion Sort Yukarı verilen dizinin sort türüne göre aşamalarını yazınız.

Big-O gösterimini yazınız.

Time Complexity: Dizi sıralandıktan sonra 18 sayısı aşağıdaki case'lerden hangisinin kapsamına girer? Yazınız

Average case: Aradığımız sayının ortada olması Worst case: Aradığımız sayının sonda olması Best case: Aradığımız sayının dizinin en başında olması. .

[7,3,5,8,2,9,4,15,6] dizisinin Selection Sort'a göre ilk 4 adımını yazınız

Öncelikle insertion sort ile sıralamayı yapalım. Inserion sort derste anlatılmadı, onun yerine selection sort anlatıldı. Aslında instertion sort yapılırken elemanlar her seferinde yer değiştirir.

Insertion sort'a göre sıralayalım: 1)[22,27,16,2,18,6] 2)[22,16,27,2,18,6] 3)[16,22,27,2,18,6] 4)[16,22,2,27,18,6] 5)[16,2,22,27,18,6] 6)[2,16,22,27,18,6] 7)[2,16,22,27,18,6] 8)[2,16,22,18,27,6] 9)[2,16,18,22,27,6] 10)[2,16,18,22,6,27] 11)[2,16,18,22,6,27] 12)[2,16,18,6,22,27] 13)[2,16,6,18,22,27] 14)[2,6,16,18,22,27]

Big O Notation = O(n^2)