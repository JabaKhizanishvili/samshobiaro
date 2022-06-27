@extends('admin.nowa.views.layouts.app')

@section('styles')

<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

@endsection

@section('content')



   <div class="container-fluid pt-4">
    <h2>Gallery</h2>

    <form action={{route('galleryaddimg')}} method="post" enctype="multipart/form-data">
@csrf
   <div class="mb-3">
    <label for="formFile" class="form-label">Default file input example</label>
    <input class="form-control" name='img' type="file" id="formFile" required>
    <input class="form-control" name='width' type="number" id="formFile" placeholder="width" required>
  </div>
  <button class="btn btn-primary">add img</button>

</form>
<table class="table">
  <thead class='pb-5'>
    <tr>
      <th scope="col">id</th>
      <th scope="col">img</th>
      <th scope="col">del</th>
    </tr>
  </thead>
  <tbody>
      @foreach ($img as $v)
      <tr>
        <td>{{ $v['id'] }}</td>
        <td><img src={{asset('storage/images')."/".$v['name']}} width="auto" height="100"></img></td>
        <td><a class="btn btn-danger" href={{route('gallerydelimg',['id'=>$v['id']])}}>del</a></td>
      </tr>
        @endforeach


  </tbody>
</table>





<div class="jaba">
    {{$img->links('admin.vendor.pagination.material')}}
</div>
</div>
@endsection

@section('scripts')



@endsection
