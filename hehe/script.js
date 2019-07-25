var app = new (

    function (data) {
        this.getName = document.getElementById("name")
        this.Name = []; //untuk menampung result di array

        this.getKelas = document.getElementById("kelas")
        this.Kelas = [];

        this.Hitung = function (data) {
            var use = document.getElementById("hitung")
            var name = "Siswa"

            if (data) {
                use.innerHTML = data + " " + name;
            } else {
                use.innerHTML = "Tidak ada " + name;
            }
        };

        this.ShowData = function () {
            var data1 = " "
            if (this.Name.length > 0) {
                for (i = 0; i < this.Name.length; i++) {
                    data1 += "<tr>";
                    data1 += "<td>" + this.Name[i] + "</td>";
                    data1 += "<td>" + this.Kelas[i] + "</td>";
                    data1 += '<td> <button class="btn btn-info" onclick="app.Edit (' + i + ')"> Edit </button> </td>';
                    data1 += '<td> <button class="btn btn-danger" onclick="app.Delete (' + i + ')"> Delete </button> </td>';
                    data1 += "</tr>";
                }
            }
            this.Hitung(this.Name.length);
            return (this.getName.innerHTML = data1);
        };

        this.Add = function () {
            var getIdAddName = document.getElementById("addName");
            var addName = getIdAddName.value;

            var getIdAddKelas = document.getElementById("addKelas");
            var addKelas = getIdAddKelas.value;

            if (getIdAddName) {
                this.Name.push(addName.trim());
                this.Kelas.push(addKelas.trim());

                getIdAddName.value = " ";
                getIdAddKelas.value = " ";
                this.ShowData();
            }
        };

        this.Edit = function (item) {
            var editNama = document.getElementById("editName") // mengambil data pada data yang sudah ada
            var editKelas = document.getElementById("editKelas")
            //menampilkan data
            editNama.value = this.Name[item]
            editKelas.value = this.Kelas[item]
            document.getElementById("formEdit").style.display = "block"

            yurod = this;
            document.getElementById("saveEdit").onsubmit = function() {
                var newName = editNama.value;
                var newKelas = editKelas.value;
                if (newName) {
                    yurod.Name.splice(item, 1, newName.trim());
                    if (newKelas) {
                        yurod.Kelas.splice(item, 1, newKelas.trim());
                    }
                    yurod.ShowData();
                    CloseInput();
                }
            }
        }

        this.Delete = function (item) {
            this.Name.splice(item, 1);

            this.ShowData();
        }
        function CloseInput(){
            document
        }
    })();

function CloseInput() {
    document.getElementById("formEdit").style.display = "none";
}