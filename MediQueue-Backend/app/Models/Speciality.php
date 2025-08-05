<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Speciality extends Model
{
    use HasFactory;

    protected $fillable = ['name'];

    protected $casts =[
        'available_days' => 'array',
        'start_time' => 'datetime:H:i',
        'end_time' => 'datetime:H:i',
        'max_patients_per_day' => 'integer',
        'image' => 'string',
        'hospital_id' => 'integer',
        'speciality_id' => 'integer',
        'doctors' => 'array',
        'name' => 'string',
        'id' => 'integer',
        'type' => 'string',
        'address' => 'string',
        'district' => 'string',
        'contact' => 'string',
        'user_id' => 'integer',
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    public function doctors()
    {
        return $this->hasMany(Doctor::class);
    }
}
